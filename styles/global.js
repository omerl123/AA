import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
  },
  back: {
    backgroundColor: 'azure',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 15,
    width: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    marginTop: 20,
    alignItems: 'center',
    width: '55%',
  },
  button: {
    width: '45%',
    marginHorizontal: 2,
  },

  square: {
    width: 300,
    height: 400,
    backgroundColor: 'lightgrey',
    marginTop: 100,
    marginBottom: 50,
  },
  
});

