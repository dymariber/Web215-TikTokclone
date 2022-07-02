import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String, 
    likes: String, 
    description: String, 
    shares: String,
}); 

export default mongoose.model('tiktokVideos',tiktokSchema); 