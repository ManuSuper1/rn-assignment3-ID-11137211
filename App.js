import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "./components/Header";
import CategoryCard from "./components/CategoryCard";
import TaskItem from "./components/TaskItem";

const categories = [
  {
    id: "1",
    name: "Exercise",
    tasks: 15,
    img: require("./assets/exercise.png"),
  },
  { id: "2", name: "Learn", tasks: 5, img: require("./assets/study.png") },
  { id: "3", name: "Code", tasks: 8, img: require("./assets/code.png") },
  { id: "4", name: "Cook", tasks: 5, img: require("./assets/cook.png") },
  { id: "5", name: "Read", tasks: 6, img: require("./assets/study.png") },
  { id: "6", name: "Travel", tasks: 3, img: require("./assets/study.png") },
  { id: "7", name: "Meditate", tasks: 7, img: require("./assets/study.png") },
  { id: "8", name: "Workout", tasks: 10, img: require("./assets/study.png") },
  { id: "9", name: "Soccer", tasks: 5, img: require("./assets/cook.png") },
  { id: "10", name: "Fifa", tasks: 6, img: require("./assets/study.png") },
  {
    id: "11",
    name: "Watch Movie",
    tasks: 3,
    img: require("./assets/study.png"),
  },
  { id: "12", name: "Call Mum", tasks: 7, img: require("./assets/study.png") },
  { id: "13", name: "Gym", tasks: 10, img: require("./assets/study.png") },
  { id: "14", name: "Exercise", tasks: 5, img: require("./assets/cook.png") },
  { id: "15", name: "Study", tasks: 6, img: require("./assets/study.png") },
];

const tasks = [
  { id: "1", name: "Mobile App Development" },
  { id: "2", name: "Web Development" },
  { id: "3", name: "Push Ups" },
  { id: "4", name: "Database Design" },
  { id: "5", name: "Graphic Design" },
  { id: "6", name: "Marketing Campaign" },
  { id: "7", name: "Content Writing" },
  { id: "8", name: "Customer Support" },
  { id: "9", name: "SEO Optimization" },
  { id: "10", name: "Team Meeting" },
  { id: "11", name: "Code Review" },
  { id: "12", name: "Bug Fixing" },
  { id: "13", name: "Unit Testing" },
  { id: "14", name: "Product Launch" },
  { id: "15", name: "Market Research" },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require("./assets/filter.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => <CategoryCard category={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F7F0E8",
    marginTop: 42,
  },
  icon: {
    width: 24,
    height: 24,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#F0522F",
    padding: 10,
    borderRadius: 5,
  },
  categoriesContainer: {
    marginBottom: 30,
    marginTop: 20,
  },
  tasksContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
