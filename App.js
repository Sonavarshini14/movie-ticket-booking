import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity ,ScrollView, Image} from 'react-native';

const MovieBookingApp = () => {
  const [movie, setMovie] = useState('');
  const [cinema, setCinema] = useState('');
  const [seats, setSeats] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleBookTicket = () => {
    
    console.log(`Booking ticket for ${movie} at ${cinema} for ${seats} seats.`);
    console.log(`Date: ${selectedDate}, Time: ${selectedTime}`);
    setIsBooked(true); 
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.heading}>Movie Ticket Booking</Text>
        <Image source = {require('./movie1.jpg')} 
          style={{ width: 230, height:120}}/>


        <TextInput
        style={styles.input}
        onChangeText={text => setMovie(text)}
        value={movie}
        placeholder="Enter movie name"
        />

        <TextInput
        style={styles.input}
        onChangeText={text => setCinema(text)}
        value={cinema}
        placeholder="Enter Theatre name"
        />

        <TextInput
        style={styles.input}
        onChangeText={text => setSeats(text)}
        value={seats}
        placeholder="Enter number of seats"
        keyboardType="numeric"
        />

        <Text style={styles.label}>                  Select Date</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleDateSelection('April 27, 2024')}>
        <Text style={styles.buttonText}>April 27, 2024</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDateSelection('April 28, 2024')}>
        <Text style={styles.buttonText}>April 28, 2024</Text>
        </TouchableOpacity>

        <Text style={styles.label}>                 Select Time</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleTimeSelection('10:00 AM')}>
        <Text style={styles.buttonText}>10:00 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleTimeSelection('1:00 PM')}>
        <Text style={styles.buttonText}>1:00 PM</Text>
        </TouchableOpacity>

        {isBooked && <Text style={styles.successText}>Ticket Booked Successfully!</Text>}

        {!isBooked && (
        <TouchableOpacity style={styles.bookTicketButton} onPress={handleBookTicket}>
        <Text style={styles.bookTicketButtonText}>Book Ticket</Text>
        </TouchableOpacity>
      )}
    </View>
  </ScrollView>   
  );
};

const styles = StyleSheet.create({
  scrollViewContent:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5F0C1', 
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#65B741', 
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8CB9BD',
    borderRadius: 5,
    width: ' 90%',
    marginBottom: 20,
    paddingHorizontal: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#7FC7D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#280274',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
  bookTicketButton: {
    backgroundColor: '#7FC7D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  bookTicketButtonText: {
    color: '#280274',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MovieBookingApp;
