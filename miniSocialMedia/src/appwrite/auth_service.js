import conf from '../conf/conf'
// from appwrite auth documentation
import { Client, Account, ID } from "appwrite";

// code is same as ducumentation but we have modifies for better practicec
export class AuthService {
    // we are not setting endpoints because it should be set during craetion of the authservice
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.APPWRITE_KEY)
            .setProject(conf.APPWRITE_PROJECT_ID);
        this.account = new Account(this.client);
    }


    // creating createAccount wrapper
    async creteAccount({ email, password, name }) {
        // it may fail so putting in try-catch
        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // do login
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({ email, password }) {
        try {
            const session = this.account.createEmailPasswordSession(
                email,
                password
            );
            return session;
        } catch (error) {
            throw error;
        }
    }

    // method to check if user is logged in or not
    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            // can throw error
            console.log("AppWrite :: getCurrentUser :: error",error);
        }
        // if no error then return null
        return null;
    }

    async logout(){
        try {
            // delete all sessions 
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}



const authService = new AuthService()

export default authService;
