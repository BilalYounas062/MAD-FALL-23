import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const friendsData = [
  { name: 'ALI', number: '83674674' },
  { name: 'ASAD', number: '34567890' },
  { name: 'ASIF', number: '6536839' },
  { name: 'ADNAN', number: '3882690' },
  { name: 'AHMED', number: '735736783' },
];

const LabMidPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LAB MID</Text>
      <Text style={styles.subtitle}>FA19-BCS-062</Text>

      {/* Display friends' information */}
      <View style={styles.friendList}>
        {friendsData.map((friend, index) => (
          <View key={index} style={styles.friendItem}>
            <Text style={styles.friendName}>{friend.name}</Text>
            <Text style={styles.friendNumber}>{friend.number}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 8,
  },
  friendList: {
    marginTop: 20,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  friendName: {
    fontSize: 16,
    marginRight: 8,
  },
  friendNumber: {
    fontSize: 16,
    color: '#555',
  },
});

export default LabMidPage;