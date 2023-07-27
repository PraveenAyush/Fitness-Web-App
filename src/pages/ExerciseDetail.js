import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { url, exerciseOptions, fetchData } from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({})
	const {id} = useParams()

	useEffect(() => {
		const fetchExerciseData = async () => {
			const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

			const exerciseDetail = await fetchData(`${url}/exercise/${id}`, exerciseOptions)
			setExerciseDetail(exerciseDetail)
		}

		fetchExerciseData()
	}, [id])

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail}/>
			<ExerciseVideos />
			<SimilarExercises />
		</Box>
	)
}

export default ExerciseDetail