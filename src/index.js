const app = require("./server")
require("dotenv").config()

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> { 
    
    console.log(`Server corriendo en http://localhost:${PORT}`);
    
})