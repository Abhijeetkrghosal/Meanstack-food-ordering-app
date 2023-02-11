import {connect,ConnectOptions} from 'mongoose';
export const dbConnect =() => {
    connect(process.env.JWT_SECRET!, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    } as ConnectOptions ) .then(() => 
        console.log('Abhijeet is connected succesfully'),
        (error) => console.log(error)
    )
}