const styles =  {
  color: '#f00',
}

const nome = 'Evandro Santana'

interface ButtonProps {
  title: string
}

export function Button (props: ButtonProps) {
  return (
    <p style={styles}>
      {props.title}
      </p>
  )
}