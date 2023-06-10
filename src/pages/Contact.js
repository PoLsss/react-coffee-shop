import React from 'react';
import '../style/web_cafe.css'
import '../style/slide.css'
import '../style/contentslider.css'

const Contact = () => {
    return (
        <main style={{width:"80%"}}>
            <section id="content">
                <header>Contact us</header>
                <p>
                    <b style={{ fontSize: '15px' }}> Thank you for your interest. Please send us comments using the form below:</b>
                </p>
                <form>
                    <table width="100%" cellSpacing="10" cellPadding="10" style={{ fontSize: '10pt' }}>
                        <tbody>
                            <tr>
                                <td width="21%">FirstName</td>
                                <td><input type="text" name="txtFirstName" autoFocus required className="txt" id="txtFirstName" /></td>
                            </tr>
                            <tr>
                                <td>LastName</td>
                                <td> <input name="txtLastName" type="text" required className="txt" id="txtLastName" /></td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td> <input name="txtPhone" type="tel" required className="txt" id="txtPhone" /></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input type="email" name="txtEmail" required className="txt" id="txtEmail" /></td>
                            </tr>
                            <tr>
                                <td>Comments</td>
                                <td><textarea name="txtComments" cols="35" rows="5" className="txt" id="txtComments"> </textarea></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <input type="checkbox" name="checksendme" id="checksendme" />
                                    Send me your monthly newsletter
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <input type="submit" name="submit" id="submit" className="but" value="submit" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </section>
        </main>
    );
}

export default Contact;
