export const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #eaeaea;
        }
        .logo {
            width: 180px;
            height: auto;
        }
        .content {
            padding: 30px 0;
        }
        .user-details {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .detail {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #555;
            display: block;
            margin-bottom: 5px;
        }
        .value {
            padding: 8px;
            background-color: white;
            border-radius: 4px;
            border: 1px solid #eaeaea;
        }
        .message-box {
            background-color: white;
            border-radius: 4px;
            border: 1px solid #eaeaea;
            padding: 12px;
            margin-top: 5px;
        }
        .footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #eaeaea;
            color: #777;
            font-size: 14px;
        }
        h1 {
            color: #333;
            font-size: 24px;
        }
        h2 {
            color: #555;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="https://teel.vercel.app/logo.png" alt="Teel App Logo" class="logo">
        <h1>New Contact Form Submission</h1>
    </div>
    
    <div class="content">
        <p>You have received a new message from your website contact form. Here are the details:</p>
        
        <div class="user-details">
            <div class="detail">
                <span class="label">Name:</span>
                <div class="value">\${form.name}</div>
            </div>
            
            <div class="detail">
                <span class="label">Email:</span>
                <div class="value">\${form.email}</div>
            </div>
            
            <div class="detail">
                <span class="label">Phone:</span>
                <div class="value">\${form.phone}</div>
            </div>
            
            <div class="detail">
                <span class="label">Message:</span>
                <div class="message-box">\${form.message}</div>
            </div>
        </div>
        
        <p>Please respond to this inquiry at your earliest convenience.</p>
    </div>
    
    <div class="footer">
        <p>© 2025 Teel App. All rights reserved.</p>
        <p>51 Bracken Road, Sandyford, Dublin, DUBLIN, D18 CV48, Ireland</p>
    </div>
</body>
</html>`;
