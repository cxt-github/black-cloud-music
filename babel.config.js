module.exports = {
  
    "presets": [["@babel/preset-env", { "modules": false}], "@babel/preset-react"],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}

