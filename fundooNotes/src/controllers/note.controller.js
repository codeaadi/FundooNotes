// import HttpStatus from 'http-status-codes';
// import * as noteService from '../services/note.service';
/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createNote = async (req, res, next) => {
    try {
      const data = await noteService.createNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Note created successfully'
      });
    } catch (error) {
      next(error);
    }
  };
//   /**
//  * Controller to create a new user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const getAllNote = async (req, res, next) => {
//     try {
    
//       const data = await noteService.getAllNote(req.body);
//       res.status(HttpStatus.CREATED).json({
//         code: HttpStatus.CREATED,
//         data: data,
//         message: 'fetched all notes successfully'
//       });
//     } catch (error) {
//       next(error);
//     }
//   };
//   /**
//  * Controller to update a user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const getNoteId = async (req, res, next) => {
//   try {
//     console.log(req,"reeqq");
//     console.log(req.params,"params");
//     const data = await noteService.getNoteId(req.params._id,req.body);
//     res.status(HttpStatus.ACCEPTED).json({
//       code: HttpStatus.ACCEPTED,
//       data: data,
//       message: 'fetched note by id successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };
//  /**
//  * Controller to update a user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
//  export const updatedNote = async (req, res, next) => {
//   try {
//     const data = await noteService.updateNote(req.params._id,req.body);
//     res.status(HttpStatus.ACCEPTED).json({
//       code: HttpStatus.ACCEPTED,
//       data: data,
//       message: 'Updated note by id successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };
//  /**
//  * Controller to update a user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
//  export const deleteNote = async (req, res, next) => {
//     try {
//       const data = await noteService.deleteNote(req.params.noteid,req.body);
//       res.status(HttpStatus.ACCEPTED).json({
//         code: HttpStatus.ACCEPTED,
//         data: data,
//         message: 'deleted note by id successfully'
//       });
//     } catch (error) {
//       next(error);
//     }
//   };
//   /**
//  * Controller to Archive a user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
//  export const archiveNote = async (req, res, next) => {
//     try {
//       const data = await noteService.archiveNote(req.params._id,req.body);
//       res.status(HttpStatus.ACCEPTED).json({
//         code: HttpStatus.ACCEPTED,
//         data: data,
//         message: 'Archive note by id successfully'
//       });
//     } catch (error) {
//       next(error);
//     }
//   };
//     /**
//  * Controller to Archive a user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
//  export const trashNote = async (req, res, next) => {
//     try {
//       const data = await noteService.trashNote(req.params._id,req.body);
//       res.status(HttpStatus.ACCEPTED).json({
//         code: HttpStatus.ACCEPTED,
//         data: data,
//         message: 'Trash note by id successfully'
//       });
//     } catch (error) {
//       next(error);
//     }
//   };