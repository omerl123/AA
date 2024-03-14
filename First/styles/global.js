import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    alignItems: 'baseline',
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20,
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
  inputReceipt: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 2,
    margin: 15,
    width: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 1,
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
    marginTop: 40,
    marginBottom: 50,
  },
  name: {
   textAlign: 'center', 
    color: 'black',
     fontWeight: 'bold', 
    fontSize: 24,
     marginTop: 20,
     },

  slide: {
    marginTop: 50,
    width: '100%', 
    height: '7%', 
    backgroundColor: 'rgba(217, 58, 0, 1)', 
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  buttonSlied: {
    width: '100%', 
    marginTop: 10, 
    marginLeft: 44,
    paddingVertical: 10, 
    backgroundColor: 'rgba(217, 58, 0, 1)', 
    borderRadius: 18, 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontWeight: 'bold', 
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 15,
    flexDirection: 'row', 
    justifyContent: 'flex-end'

},
products: {
  width: '100%',
  paddingVertical: 2,
  borderRadius: 18,
  fontWeight: 'bold',
  fontSize: 15,
  borderWidth: 2,
  borderColor: 'black',
},
productsText:{
  fontWeight:'bold',
  fontSize: 17,
  textAlign: 'left',
  alignSelf: 'flex-start',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
productsButtons:{
  width: 40, 
  height: 40, 
  padding: 10, 
  borderRadius: 18,
  borderWidth: 2,
  borderColor: 'black',
  alignSelf: 'flex-end',
}

}
);
