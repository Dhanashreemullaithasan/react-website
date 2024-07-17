import './TablePage.css'

function TablePage() {  
  return (  
    <>
        <div className="table">
            <h1>Departments</h1>
            <table>
                <thead>
                    <tr>
                      <th>S.NO</th><th>Departments</th>
                    <th>Counts</th></tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>AIDS</td>
                <   td>120</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>ECE</td>
                <   td>110</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>AI & IOT</td>
                   <td>120</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Medical Electronics</td>
                   <td>110</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>BME</td>
                   <td>100</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>EEE</td>
                   <td>110</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>MECH</td>
                   <td>130</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>EIE</td>
                   <td>90</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>AIML</td>
                   <td>120</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>AICS</td>
                   <td>120</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>CSE</td>
                   <td>120</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>IT</td>
                   <td>110</td>
                </tr></tbody>
            </table>
        </div>
        </>
  );  
}  

export default TablePage;