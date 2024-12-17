document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validar campos
    if (name === '' || email === '' || message === '') {
      // Mostrar mensaje de error si algún campo está vacío
      Swal.fire({
        icon: 'error',
        title: '¡Oops!',
        text: 'Por favor, completa todos los campos.',
      });
    } else {
      // Mostrar mensaje de éxito si todo está bien
      Swal.fire({
        icon: 'success',
        title: '¡Formulario Enviado!',
        text: 'Gracias por tu mensaje, nos pondremos en contacto contigo pronto.',
      }).then(() => {
        // Resetear el formulario después del mensaje de éxito
        document.getElementById('contactForm').reset();
      });
    }
  });
  