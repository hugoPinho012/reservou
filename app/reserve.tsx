import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { useHeaderHeight } from "@react-navigation/elements";
import { Calendar, DateData } from "react-native-calendars";
import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { LocaleConfig } from "react-native-calendars";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [selectedDate, setSelectedDate] = useState<String>(
    "Escolha uma data no calendário :)"
  );
  let displayDate: string;
  let day: string;
  let month: string;
  let year: string;

  LocaleConfig.locales["pt"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Marçco",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Janv.",
      "Févr.",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ],
    dayNames: [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ],
    dayNamesShort: ["Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb.", "Dom."],
    today: "Hoje",
  };

  LocaleConfig.defaultLocale = "pt";

  const handleOnDayPress = (pressedDate: DateData) => {
    day = `${pressedDate?.day}`;
    month =
      pressedDate?.month.toString().length === 2
        ? `${pressedDate?.month}`
        : `0${pressedDate?.month}`;
    year = `${pressedDate?.year}`;

    displayDate = `${day}/${month}/${year}`;

    setSelectedDate(displayDate);
    console.log(selectedDate);
  };

  return (
    <View style={[defaultStyles.container, { flexGrow: 1 }]}>
      <View style={{ paddingTop: 15 }}>
        <Text>Reservar</Text>
        <View
          style={{
            borderColor: Colors.darkGray,
            borderWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Calendar
          style={{ backgroundColor: Colors.background }}
          enableSwipeMonths={true}
          onDayPress={handleOnDayPress}
          theme={{
            backgroundColor: Colors.background,
            calendarBackground: Colors.background,
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
          }}
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "space-between",
          paddingTop: 40,
        }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>{selectedDate}</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
          }}
        >
          <Button text={"Reservar"} handleOnPress={() => null} />
        </View>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
