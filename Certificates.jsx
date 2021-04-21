/* To start, open the PSD template with the text layer on top
 * Run this script manually
 * PDFs go into folder located at relativePath
 */


// Replace with path to your home folder
const userHome = "/Users/username/"
// Replace with path relative to user's folder
const relativePath = "Desktop/Event-Name Certificates/"
// Replace with your preferred file name prefix
const fileNamePrefix = "Event-Name Certificate - " // can be empty
const prefix = userHome + relativePath + fileNamePrefix


// Selecting the top layer (where names will be replaced)
const layerIndex = 0;
var templateRef = app.documents[0] // selects first document in photoshop window
var topLayerRef = templateRef.artLayers[layerIndex]
var textItemRef = topLayerRef.textItem
const originalText = textItemRef.contents


// Fill names in below array
const names = ["Jane Doe", "John Doe"]


// Setting up to save output as PDF file
var saveOptions = new PDFSaveOptions()
saveOptions.layers = false


for(var i = 0; i < names.length; i++) {
	// Make changes
	textItemRef.contents = names[i]

	// Save File
	var fileOut = new File(prefix + names[i] + ".psd");
	templateRef.saveAs(fileOut, saveOptions, true, Extension.LOWERCASE);
}


// Cleaning up
textItemRef.contents = originalText
templateRef = null
topLayerRef = null
textItemRef = null
