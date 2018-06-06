# ImageTexter

Structure
index
- App
    * fileUploaded = False
    * outputGenerated = null
    () handleGenerateBtnClick
    - About
    - Input
        + outputGenerated -> sets outputGenerated to arg
        + generateBtnClick -> sets fileUploaded to True
        * selectedFile = null
        * uploadProgress = 0
        () fileChangeHandler
        () uploadHandler
    - Output
        + output = outputGenerated
    - ShareBtns

To-Do
- Add options
- Add ShareBtns functionality
- Add appropriate favicon