import { error, log } from 'winston';
import database from '../config/database';
import noteModel from '../models/note.model';
import note from '../models/note.model';
import bcrypt from 'bcrypt';
import { Jwt } from 'jsonwebtoken';
import { client } from '..';
import { promisify } from 'util';

// // // Create New Note

export const createNote = async (body) => {
    const data = await note.create(body)
    return data;
}
// get all Notes
export const getAllNote = async (value) => {
    const data = await note.find({userId:value.userId});
    client.set("note",JSON.stringify({data}));
    return data;
  };
//   get Note by Id 
export const getNoteId = async (_id,value) => {
    const data = await note.findById({_id,userId:value.userId});
    client.set("note", JSON.stringify({data}));
    return data;  
  };

// //   updateNote Using Id
  export const updateNote = async (_id, body,value) => {

    const data = await note.findByIdAndUpdate(
      {
        userId:value.userId
      },
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    client.set("note", JSON.stringify({data}));
    return data;
  };

// // Delete Note By Id
export const deleteNote = async (_id,value) => {
    await note.findByIdAndDelete({_id,userId:value.userId});
    client.set("note", JSON.stringify({data:" "}));
    return '';
  };
//   // Archive note by id
  export const archiveNote = async (_id,body) => {
    const note = await note.findOne({ id:_id , userId: body.userId });
  const pinned = note.pinned === false ? true : false;
  const data = await note.findByIdAndUpdate(
    { id:_id, userId: body.userId },
    { pinned: pinned }
  );
  return data;
  };

//   // trash note by id
  export const trashNote = async (_id,value) => {
    const dataTrash = await note.findOne({_id,userId:value.userId});
    
    if(!dataTrash){
      throw new Error("Note not found");
    }
    dataTrash.isTrash = !dataTrash.isTrash;
    const trashedNote = await dataTrash.save();
    return trashedNote;
  };
  // pin note by id
  export const pinNote = async (_id,value)=>{
    const pinnednote = await note.findOne({_id,userId:value.userId});
    if(pinnednote){
      throw new Error("Note Not Found")
    }
    pinnednote.isPinned= !pinnednote.isPinned
    const notePin= await pinnednote.save()
    return notePin
  }