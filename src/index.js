
require("dotenv").config()
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const app = require("./server")
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> { 
    
    console.log(`Server corriendo en http://localhost:${PORT}`);
    
})