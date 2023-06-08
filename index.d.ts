/**
 * Represents the LogiX class for encryption and decryption operations.
 */
export default class LogiX {
    /**
     * The number of the original key.
     */
    private n_key;
  
    /**
     * The base for key generation.
     */
    private base;
  
    /**
     * The private key for encryption and decryption.
     */
    private privateKey;
  
    /**
     * The public key for encryption and decryption.
     */
    private publicKey;
  
    /**
     * The array of generated keys.
     */
    private keys;
  
    /**
     * Creates an instance of the LogiX class.
     */
    constructor();
  
    /**
     * Initializes the LogiX instance from a public key.
     * @param publicKey The string that represent the public information of the key.
     * @returns The current instance of LogiX.
     */
    fromPublicKey(publicKey: string): this;
  
    /**
     * Generates keys for encryption and decryption.
     * @param base The base for key generation (optional).
     * @param max The maximum number of keys to generate (optional).
     * @returns The current instance of LogiX.
     */
    createKeys(base?: number, max?: number): this;
  
    /**
     * Gets the string that represent the public information of the key.
     * @returns The public key as a string.
     */
    get PublicKey(): string;
  
    /**
     * Encrypts a plain text using the public key.
     * @param plainText The plain text to encrypt.
     * @returns The encrypted text as a string.
     */
    encryptPublic(plainText: string): string;
  
    /**
     * Decrypts an encrypted text using the public key.
     * @param plainText The encrypted text to decrypt.
     * @returns The decrypted text as a string.
     */
    decryptPublic(plainText: string): string;
  
    /**
     * Encrypts a plain text using the private key.
     * @param plainText The plain text to encrypt.
     * @returns The encrypted text as a string.
     */
    encryptPrivate(plainText: string): string;
  
    /**
     * Decrypts an encrypted text using the private key.
     * @param plainText The encrypted text to decrypt.
     * @returns The decrypted text as a string.
     */
    decryptPrivate(plainText: string): string;
  }
  