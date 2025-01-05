/* purpose of this file is to return all the api keys so we do not need to write import.meta.env in project
This is production grade approach */

const conf = {
    APPWRITE_KEY : String(import.meta.env.VITE_APPWRITE_API_KEY),
    APPWRITE_PROJECT_ID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    APPWRITE_COLLECTION_ID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    APPWRITE_DATABASE_ID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    APPWRITE_BUCKET_ID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;