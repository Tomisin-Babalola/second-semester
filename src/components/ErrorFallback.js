

const ErrorFallback = ({error}) => {
  return (
    <div>
        <p>Something went wrong!</p>
        <p>{error.message}</p>
    </div>
  )
}

export default ErrorFallback