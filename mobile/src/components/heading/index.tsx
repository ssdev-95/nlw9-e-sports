import { Text, View, ViewProps } from 'react-native'
import { styles } from './styles'

interface HProps extends ViewProps {
  title: string
  subtitle: string
}

export function Heading({ title, subtitle, ...rest }: HProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}
