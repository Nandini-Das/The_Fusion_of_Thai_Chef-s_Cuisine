import React, { useRef } from "react";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const MyDocument = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 30,
      fontSize: 12,
    },
    title: {
      fontSize: 15,
    
      fontWeight: 'bold',
      textAlign: 'center',
    },
    content: {
      marginTop: 20,
      textAlign: 'justify',
      lineHeight: 1.5,
    },
  });
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <div className="container d-flex g-4">
            <div className="border p-2">
            <Text style={styles.title}>Differences between uncontrolled and controlled components : </Text>
          <Text style={styles.content}><p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p> </Text>
            </div>
            <div className="border p-2">
            <Text style={styles.title}>How to Validate React Props <br /> Using PropTypes :  </Text>
        
          <Text style={styles.content}><p>React is a JavaScript library used for creating interactive web frontend applications. It is one of the most popular libraries because of its easy-to-use API. We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.</p> </Text>
            </div>
            <div className="border p-2">
            <Text style={styles.title}>Difference between nodejs and express js.</Text>
          <Text style={styles.content}><p> Node.js is a runtime environment that executes JavaScript code on the server-side, while Express.js is a web application framework built on top of Node.js that simplifies the process of building web applications and APIs. Express.js provides a set of features and tools that make it easier to develop web applications using Node.js.</p></Text>
            </div>
            <div className="border p-2">
            <Text style={styles.title}>What is a custom hook, and why will you create a custom hook?</Text>
          <Text style={styles.content}><p>A custom hook is a function that is written in React to encapsulate common logic or functionality that can be reused across multiple components. Custom hooks typically use React hooks, such as useState, useEffect, useContext, and others, to encapsulate stateful or effectful behavior, and expose a simple, reusable interface to components.Custom hooks provide a powerful abstraction for encapsulating and reusing complex functionality in React applications. They can help reduce code duplication, promote better code organization, and improve the overall maintainability and scalability of application. So, we need to create a Custom hook for different reasons. 
            <br />
            
            </p></Text>
            </div>
        </div>
     
      </Page>
    </Document>
  );
}

function App() {
  const pdfRef = useRef(null);

  return (
    <div>
        <div className="d-flex justify-content-around">
        <h5 className=" text-dark text-center p-2 mt-3">React based Query and Informations</h5>
       <Pdf targetRef={pdfRef} filename="blog.pdf">
        {({ toPdf }) => <button className="btn btn-danger float-end" onClick={toPdf}>Download Pdf</button>}
      </Pdf>

    </div>
    <div ref={pdfRef}>
        <MyDocument />
      </div>
    </div>
    
  );
}

export default App;