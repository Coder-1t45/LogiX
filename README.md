# LogiX
LogiX is a minimal encryption and decryption package that utilizes boolean logic gates and various mathematical functions for generating pair keys. This package provides a simple yet robust solution for secure communication and data protection.

## Note: Package Availability

This package, LogiX, is available for free download directly from the GitHub repository. However, it is not published on npm. I created this package as a personal project to showcase my skills and for the joy of coding. Feel free to download the repository from GitHub and incorporate it into your projects. Enjoy using LogiX!

# Usage
Once LogiX is installed and imported, you can create an instance of the LogiX class and perform encryption and decryption operations.

Here's an example of how to use LogiX:

```js
// Import LogiX
import LogiX from 'location/to/logix/folder';

// Create an instance of LogiX
const logix = new LogiX();

// Generate keys
logix.createKeys();

// Encrypt a plain text using the public key
const encryptedText = logix.encryptPublic('Hello, LogiX!');

// Decrypt the encrypted text using the private key
const decryptedText = logix.decryptPrivate(encryptedText);

console.log(decryptedText); // Output: Hello, LogiX!
```

In the example above, we first import LogiX into our project. Then we create an instance of LogiX and generate the pair keys using the createKeys() method. We can then encrypt a plain text using the encryptPublic() method, which utilizes the public key. Finally, we decrypt the encrypted text using the decryptPrivate() method, which uses the private key.

Feel free to explore other methods provided by the LogiX class for more advanced encryption and decryption functionalities.
