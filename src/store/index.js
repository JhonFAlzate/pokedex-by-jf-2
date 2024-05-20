import { configureStore } from '@reduxjs/toolkit'
import trainer from './slices/trainer.slice'
import dark from './slices/dark.slice'

export default configureStore({
  reducer:{
    trainer,
    dark
    
  }
})