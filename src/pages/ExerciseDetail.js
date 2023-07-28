import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { url, exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({})
	const [exerciseVideos, setExerciseVideos] = useState([])
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
	const [equipmentExercises, setEquipmentExercises] = useState([])
	const {id} = useParams()

	useEffect(() => {
		const fetchExerciseData = async () => {
			const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

			const exerciseDetail = await fetchData(`${url}/exercise/${id}`, exerciseOptions)
			setExerciseDetail(exerciseDetail)

			const exerciseVideos = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}`, youtubeOptions)
			setExerciseVideos(exerciseVideos.contents)

			const targetMuscleExercises = await fetchData(`${url}/target/${exerciseDetail.target}`, exerciseOptions)
			setTargetMuscleExercises(targetMuscleExercises)

			const equipmentExercises = await fetchData(`${url}/equipment/${exerciseDetail.equipment}`, exerciseOptions)
			setEquipmentExercises(equipmentExercises)
		}

		fetchExerciseData()
	}, [id])

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail}/>
			<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
			<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
		</Box>
	)
}

export default ExerciseDetail