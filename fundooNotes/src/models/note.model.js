import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String
    },
    description:{
      type: String
    },
    color:{
        type:String
    },
    isArchive:{
        type: Boolean,
        default: false
    },
    isTrash: {
        type: Boolean,
        default: false
    },
    userId: {
      type: String
    },
    isPinned: {
      type: Boolean
    }
    
  },
  {
    timestamps: true
  }
);

export default model('note', noteSchema);