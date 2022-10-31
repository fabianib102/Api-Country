import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('fetchear los countries')
})

router.post('/', (_req, res) => {
  res.send('Post countries')
})

export default router
