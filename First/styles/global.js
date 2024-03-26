import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    paddingRight: 20,
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
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingHorizontal: 1,
    marginTop: 10,
    alignItems: 'center',
    width: '50%',
  },
  button: {
    width: '45%',
    marginHorizontal: 2,
  },

  square: {
    width: 300,
    height: 400,
    marginTop: 40,
    marginBottom: 50,
  },
  text: {
   textAlign: 'center', 
    color: 'black',
     fontWeight: 'bold', 
    fontSize: 18,
       },
  helloText : {
    textAlign: 'center', 
    color: 'black',
    fontWeight: 'bold', 
    fontSize: 24,
    marginTop:40,
    },

  slide: {
    marginTop: 50,
    width: '100%', 
    height: '7%', 
    backgroundColor: 'rgba(217, 58, 0, 1)', 
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  buttonSlied: {
    width: '100%', 
    marginTop: 10, 
    marginLeft: 30,
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
  alignSelf: 'flex-end',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
productsButtons: {
  width: 40, 
  height: 40, 
  padding: 10, 
  borderRadius: 18,
  borderWidth: 2,
  borderColor: 'black',
  alignSelf: 'flex-end',
},
inputDropdown: {
  borderWidth: 1,
  borderColor: '#777',
  padding: 1,
  margin: 10,
  width: 120,
},
lowerButtons: {
  height: 50,
  paddingTop: 0,
  backgroundColor: 'coral',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  paddingHorizontal: 20,
},

buttonContainerReceipt: {
  flexDirection: 'row-reverse',
  justifyContent: 'flex-end',
  paddingHorizontal: 1,
  marginTop: -10,
  alignItems: 'center',
  width: '55%',
},
TotalPriceText:{
  fontWeight:'bold',
  fontSize: 22,
  textAlign: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  top:5,
  left:10,
},
backArrow: {
  fontSize: 25,
  marginRight: 0,
  color: 'black',
},
model :{
  width: 300,
  height: 200,
  backgroundColor: 'white',
  marginTop: 350,
  marginLeft: 55,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection:'row' ,
  borderColor:'black',
  borderWidth: 3,
},

inputFade :{
position: 'absolute', 
top: 70 ,
left:40,
alignSelf: 'center' ,
},

buttonsFade :{
  flexDirection: 'row',
   justifyContent: 'space-around',
    width: '100%', 
    alignSelf: 'center',
    marginTop: 150 ,
    right:140,
},
percentageSign: {
  fontSize: 20,
  alignSelf: 'center',
  marginBottom:140,
  left:80,
},
buttonContainerCode: {
  marginTop: 20,
  alignItems: 'center',
  width: '40%',
},
preview: {
alignSelf: 'stretch',
flex: 1,
},
CameraButton: {
  flex: 1,
   justifyContent: 'flex-end', 
   marginBottom: 36,
},
innerCircle: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 80,
  height: 80,
  borderRadius: 80, 
},
cameraButton: {
  borderRadius: 60, 
  backgroundColor: 'black', 
  padding: 10,
},
camera: {
  width: 100,
  height: 400,
  aspectRatio: 3/4,
},
});



