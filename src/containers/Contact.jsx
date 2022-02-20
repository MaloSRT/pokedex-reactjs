const Contact = () => {
    return (
        <>
            <h2>Contact</h2>
            <form method="post">
                <input type="text" name="name" placeholder="Nom" required />
                <input type="text" name="surname" placeholder="Prénom" required />
                <input type="email" name="email" placeholder="E-mail" required />
                <textarea name="message" placeholder="Message" rows="10" required></textarea>
                <input type="submit" name="send" value="Envoyer" />
            </form>
        </>
    );
};
  
export default Contact;