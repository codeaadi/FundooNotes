import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator'; 
import { userAuth } from '../middlewares/auth.middleware';
import { redisdata } from '../config/redis';

const router = express.Router();

// //route to Register a new user
router.get('',userAuth,redisdata,noteController.getAllNote);
router.post('',newNoteValidator,redisdata,userAuth, noteController.createNote);
router.get('/:_id',userAuth,redisdata,noteController.getNoteId);
router.put('/:_id',userAuth,redisdata,newNoteValidator,noteController.updatedNote)
router.delete('/:_id',userAuth,redisdata,noteController.deleteNote)
router.put('/archive/:_id',userAuth,redisdata,noteController.archiveNote)
router.put('/trash/:_id',userAuth,redisdata,noteController.trashNote)
router.put('/pin/:_id',userAuth,noteController.pinNote)
export default router;