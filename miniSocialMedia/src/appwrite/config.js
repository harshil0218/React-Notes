import conf from '../conf/conf'

import { Client, Databases,ID,Storage,Query } from "appwrite";

export class Service{
    client  = new Client()
    databases
    bucket

    constructor(){
        this.client
            .setEndpoint(conf.APPWRITE_KEY)
            .setProject(conf.APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Service :: createPost :: error",error);
            
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }   
            )
        } catch (error) {
            console.log("Service :: updatePost :: error",error);
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug
            )
            return true;
        } catch (error) {
            console.log("Service :: deletePost :: error",error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug
            )
        } catch (error) {
            console.log("Service :: getPost :: error",error);
            return false
        }
    }

    // get all active posts
    async getAllPosts(quearies = [Query.equal('status','active')]){
        try {
            return await this.databases.listDocuments(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                quearies
            )
        } catch (error) {
            console.log("Service :: getAllPosts :: error",error);
            return false
        }
    }

    // uploading file
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Service :: uploadFile :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.APPWRITE_BUCKET_ID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Service :: deleteFile :: error",error);
            return false
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.APPWRITE_BUCKET_ID,
                fileId
            )
        } catch (error) {
            console.log("Service :: getFilePreview :: error",error);
            return false
        }
    }
}

const service = new Service()

export default service