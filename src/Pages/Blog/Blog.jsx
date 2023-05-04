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
      fontSize: 24,
      marginBottom: 10,
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
        <div className="container d-flex ">
            <div className="border">
            <Text style={styles.title}>Hello CodeSandbox</Text>
          <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla? Qui, omnis? Ipsa, reprehenderit ullam maiores quam debitis placeat ipsam eveniet, ipsum magni velit officiis accusamus praesentium ut incidunt architecto! Accusantium numquam est earum veritatis reprehenderit explicabo quae harum non qui ea, labore nostrum repellendus delectus eaque facere perspiciatis tenetur!</Text>
            </div>
            <div className="border">
            <Text style={styles.title}>Hello CodeSandbox</Text>
        
          <Text style={styles.content}><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla? Qui, omnis? Ipsa, reprehenderit ullam maiores quam debitis placeat ipsam eveniet, ipsum magni velit officiis accusamus praesentium ut incidunt architecto! Accusantium numquam est earum veritatis reprehenderit explicabo quae harum non qui ea, labore nostrum repellendus delectus eaque facere perspiciatis tenetur!</p> </Text>
            </div>
            <div className="border">
            <Text style={styles.title}>Hello CodeSandbox</Text>
          <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla? Qui, omnis? Ipsa, reprehenderit ullam maiores quam debitis placeat ipsam eveniet, ipsum magni velit officiis accusamus praesentium ut incidunt architecto! Accusantium numquam est earum veritatis reprehenderit explicabo quae harum non qui ea, labore nostrum repellendus delectus eaque facere perspiciatis tenetur!</Text>
            </div>
            <div className="border">
            <Text style={styles.title}>Hello CodeSandbox</Text>
          <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla? Qui, omnis? Ipsa, reprehenderit ullam maiores quam debitis placeat ipsam eveniet, ipsum magni velit officiis accusamus praesentium ut incidunt architecto! Accusantium numquam est earum veritatis reprehenderit explicabo quae harum non qui ea, labore nostrum repellendus delectus eaque facere perspiciatis tenetur!</Text>
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
        <div className="container d-flex justify-content-around">
        <h1 className="text-center p-2">Blog Page</h1>
       <Pdf targetRef={pdfRef} filename="blog.pdf">
        {({ toPdf }) => <button className="btn btn-success float-end" onClick={toPdf}>Download Pdf</button>}
      </Pdf>

    </div>
    <div ref={pdfRef}>
        <MyDocument />
      </div>
    </div>
    
  );
}

export default App;