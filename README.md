# Certgen
-----

Script to generate certificates from a photoshop document. Now you can create 100 hundered certificates in a few seconds!!

**Note:** This script has been tested and works with Adobe Photoshop 2020 and Windows 10. This script should work with most versions of Photoshop and on MacOS if the below steps are followed and constants are updated appropriately.

## Steps to use this script

1. Open a photoshop document contaning template for certificate.
2. Make sure the layer containing text to be replaced by recepients' names is above all other layers.
3. Download [this script](https://github.com/shivangagr/certgen/Certificates.jsx) and open it in a text editor (like Notepad).
4. (Optional) Update the `userHome` and `relativePath` constants on line 13 and 15 according to your environment.
5. Change the `fileNamePrefix` constant on line 17 with the prefix you want for certificates' file name which will be appended with each recepient's name.
6. Replace the list on line 28 with your list of recepients' names.
7. (Optional) If you cannot put the text layer on top due to design or other reasons, update the `layerIndex` on line 22 accordingly. In simple words, layerIndex is equal to number of layers above the text layer.
8. (Optional) You can modify settings related to saving the certificate in PDF format.
9. Return to Photoshop and run the script from ***Menu > foo > bar > Run Script > Select this script***.
10. Done!

## Roadmap

1. Add a sample photoshop document as template (https://github.com/virresh/CertificateScript).
2. Modify script to restore template's original text at end of script.
3. Add a user-friendly way to input the names.
4. Add a user-friendly way to alter output format and settings.

## Inspiration

[Josh Wright - Automating Photoshop with JavaScript](https://www.joshwright.com/tips/automating-photoshop-with-javascript)

