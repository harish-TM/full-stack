import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// date fns

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <div className='flex-box'>
      <img src={require(`../img/${workout.imgSrc}.jpg`)} ></img>
      <p>{workout.desc}</p>
      </div>
      <strong>{workout.price} £</strong>
    </div>
  )
}

export default WorkoutDetails