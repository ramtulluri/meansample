/**
 * Created by Sandeep on 01/06/14.
 */

// Load Our Modules


//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='movieDB';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//app.use('/api', movies);

app.get('/', function (req, res) {
    res.sendfile('../client/views/index.html');
});

module.exports = app;
