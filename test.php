/*
*<form action="test.php" method=POST>
* 	 Name:<br><input type="text" name="name"><br>
*    Email:<br><input type="text" name="name"><br>
*    Password:<br><input type="text" name="name"><br>
*    <input type="submit" value="Submit">
*</form>	
*/


<?php

class MsgMail{
    private $to,$subject,$message,$headers;  

    public function __construct( $message, $to = 'skynapier@outlook.com',$subject = 'php email test', $hedaers =  'From: testphp@php.com' ){
        $this->message = $message;
        $this->to = $to;
        $this->subject = $subject;
        $this->header = $headert;
    }

    public sendMail(){
        mail($this->to, $this->subject, this->$message, this->$headers);
    }

}


$message = 'name ：' . $_POST["name"]. '\r\n email: '. $_POST["email"]. '\r\n password: '. $_POST["password"];
$sendMsg = new MsgMail($message);

$sendMsg->sendEmail();
?>