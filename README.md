# LocationApp Angular
This project consist of a form which is used to store data of delivery carrier such as UPS, Fedex etc in database and send them the email as well. 

# Link
http://18.191.249.225:8080/location/

## Form Fields
```sh
  carrierName: string;
  carrierPhoneNumber: number;
  location: string;
  date: Date;
  numberOfTrucksAvailable: number;
  email: string;
```

When data is entered in the above field and submit button is clicked an api `api/locations` is hit (Another project which is in my git hub profile with the name [mail-server] built in `expressJs`). After that data is stored in db and an email is sent to the email id entered in email field.

 [mail-server]: <https://github.com/himanshupahwahp/mail-server>
