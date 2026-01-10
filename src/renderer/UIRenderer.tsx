import { View, Text, Image, Button, Alert } from 'react-native';

type ComponentItem = {
  type: string;
  value?: string;
  url?: string;
  text?: string;
  action?: string;
};

type Props = {
  components: ComponentItem[];
};

export default function UIRenderer({ components }: Props) {
  return (
    <View>
      {components.map((item, index) => {
        if (item.type === 'text') {
          return (
            <Text key={index} style={{ fontSize: 24, marginBottom: 12 }}>
              {item.value}
            </Text>
          );
        }

        if (item.type === 'image') {
          return (
            <Image
              key={index}
              source={{ uri: item.url }}
              style={{ width: '100%', height: 200, marginBottom: 12 }}
            />
          );
        }

        if (item.type === 'button') {
          return (
            <Button
              key={index}
              title={item.text ?? 'Button'}
              onPress={() =>
                Alert.alert('Action triggered', item.action ?? '')
              }
            />
          );
        }

        return null;
      })}
    </View>
  );
}
