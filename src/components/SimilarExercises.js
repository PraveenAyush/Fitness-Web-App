import React from 'react'
import {Box, Typography, Stack} from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '50px' , xs: '0'}}}>
        <Typography variant='h3' mb={5}>Exercises that target the same muscle groups</Typography>
        <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
            {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
        </Stack>

        <Typography variant='h3' mb={5}>Exercises that use the same equipment</Typography>
        <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
            {targetMuscleExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
        </Stack>
    </Box>
  )
}

export default SimilarExercises