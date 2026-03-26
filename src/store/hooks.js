// TODO: replace all useSelector and useDispatch imports in components
// with useAppSelector and useAppDispatch from this file

// Use these hooks instead of plain useSelector and useDispatch
// They are pre-typed to work with this store's state shape

import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector
