import qrcode

# Define the URL
url = "https://www.ethanbonsall.com/birthday"

# Create QR code
qr = qrcode.make(url)

# Save the QR code as an image
qr.save("birthday_qr.png")
