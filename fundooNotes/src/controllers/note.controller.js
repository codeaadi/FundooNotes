import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';
/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createNote = async (req, res) => {
    try {
      const data = await noteService.createNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Note created successfully'
      });
    } catch (error) {
      {
        res.status(HttpStatus.BAD_REQUEST).json({
          code: HttpStatus.BAD_REQUEST,
          message:'Invalid email'
          })
      }
    }
  };
  /**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllNote = async (req, res) => {
    try {
    
      const data = await noteService.getAllNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'fetched all notes successfully'
      });
    } catch (error) {
      {
        res.status(HttpStatus.BAD_REQUEST).json({
          code: HttpStatus.BAD_REQUEST,
          message:'Invalid User'
          })
      }
    }
  };
  /**
 * Controller to update a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getNoteId = async (req, res) => {
  try {
    const data = await noteService.getNoteId(req.params._id,req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'fetched note by id successfully'
    });
  } catch (error) {
    {
      res.status(HttpStatus.BAD_GATEWAY).json({
        code: HttpStatus.BAD_GATEWAY,
        message:'Note Not Found'
        })
    }
  }
};
 /**
 * Controller to update a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const updatedNote = async (req, res) => {
  try {
    const data = await noteService.updateNote(req.params._id,req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Updated note by id successfully'
    });
  } catch (error) {
    {
      res.status(HttpStatus.BAD_GATEWAY).json({
        code: HttpStatus.BAD_GATEWAY,
        message:'Note Not Found'
        })
    }
  }
};
 /**
 * Controller to update a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const deleteNote = async (req, res) => {
    try {
      const data = await noteService.deleteNote(req.params.noteid,req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'deleted note by id successfully'
      });
    } catch (error) {
      {
        res.status(HttpStatus.BAD_GATEWAY).json({
          code: HttpStatus.BAD_GATEWAY,
          message:'Note Not Found'
          })
      }
    }
  };
  /**
 * Controller to Archive a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const archiveNote = async (req, res) => {
    try {
      const data = await noteService.archiveNote(req.params._id,req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Archive note by id successfully'
      });
    } catch (error) {
      {
        res.status(HttpStatus.BAD_GATEWAY).json({
          code: HttpStatus.BAD_GATEWAY,
          message:'Note Not Found'
          })
      }
    }
  };
    /**
 * Controller to Archive a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const trashNote = async (req, res) => {
    try {
      const data = await noteService.trashNote(req.params._id,req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Trash note by id successfully'
      });
    } catch (error) {
      {
        res.status(HttpStatus.BAD_GATEWAY).json({
          code: HttpStatus.BAD_GATEWAY,
          message:'Note Not Found'
          })
      }
    }
  };
      /**
 * Controller to Archive a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const pinNote = async (req, res) => {
  try {
    const data = await noteService.pinNote(req.params._id,req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Trash note by id successfully'
    });
  } catch (error) {
    {
      res.status(HttpStatus.BAD_GATEWAY).json({
        code: HttpStatus.BAD_GATEWAY,
        message:'Note Not Found'
        })
    }
  }
};