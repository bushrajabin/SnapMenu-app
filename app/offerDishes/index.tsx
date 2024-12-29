import React, { useState } from "react";
import {
  TextInput,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { offerDishes } from "@/components/Common";
import FullWidthButtons from "@/components/FullWidthButtons";
import { router } from "expo-router";
// import DateTimePicker from "react-native-ui-datepicker";
// import dayjs from "dayjs";

export default function OfferDishes() {
  const [values, setValues] = useState(offerDishes);
  // const [date, setDate] = useState(dayjs());
  // const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChanges = (text, index) => {
    const updatedFields = [...values];
    updatedFields[index].input = text;
    setValues(updatedFields);
  };

  // const handleDateSelection = (selectedDate: number) => {
  //   const updatedFields = [...values];
  //   updatedFields[1].input = dayjs(selectedDate).format("YYYY-MM-DD"); // Format date as needed
  //   setValues(updatedFields);
  //   setShowDatePicker(false); // Close the date picker
  // };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.commonDiv}>
        {values.map((fields, index) => (
          <View key={index} style={Styles.commonInputDiv}>
            <TextInput
              value={fields.input}
              placeholder={fields.title}
              onChangeText={(text) => handleInputChanges(text, index)}
            />
            {fields.icon && (
              <Pressable
              // onPress={() =>
              //   fields.title === "Expiry Date" && setShowDatePicker(true)
              // }
              >
                {fields.icon}
              </Pressable>
            )}
          </View>
        ))}
      </View>

      <View style={Styles.buttonContainer}>
        <FullWidthButtons
          title={"Add to Offer"}
          onPress={() => router.navigate("/SpecialOffers")}
        />
      </View>

      {/* Show Date Picker When Icon is Clicked */}
      {/* {showDatePicker && (
        <DateTimePicker
          mode="single"
          date={date}
          onChange={(params) => {
            setDate(params.date);
            handleDateSelection(params.date); // Update the Expiry Date field
          }}
        />
      )} */}
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  commonDiv: {
    flex: 1,
    paddingVertical: 60,
  },
  commonInputDiv: {
    backgroundColor: "whitesmoke",
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 7,
    borderStyle: "solid",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 15,
    padding: 10,
  },
  buttonContainer: {
    padding: 10,
  },
});
