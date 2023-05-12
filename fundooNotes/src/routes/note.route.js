// import express from 'express';
// import * as noteController from '../controllers/note.controller';
// import { newNoteValidator } from '../validators/note.validator'; 
// import { userAuth } from '../middlewares/auth.middleware';

// const router = express.Router();

// //route to Register a new user
router.get('',userAuth, noteController.getAllNote);
router.post('',newNoteValidator,userAuth, noteController.createNote);
router.get('/:_id',userAuth,noteController.getNoteId);
router.put('/:_id',userAuth,newNoteValidator,noteController.updatedNote)
router.delete('/:_id',userAuth,noteController.deleteNote)
// router.put('/archive/:_id',userAuth,noteController.archiveNote)
// router.put('/trash/:_id',userAuth,noteController.trashNote)
export default router;