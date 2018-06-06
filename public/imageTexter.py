import numpy as np
import sys

from PIL import Image

# gray scale level values from: 
# http://paulbourke.net/dataformats/asciiart/

# 70 levels of gray
gscale1 = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,\"^`'. "
# 10 levels of gray
gscale2 = '@%#*+=-:. '


def getAverageL(image):
    """
    Given PIL Image, return average value of grayscale value
    """
    # get image as numpy array
    im = np.array(image)
    # get shape
    w, h = im.shape
    # get average
    return np.average(im.reshape(w * h))


def covertImageToAscii(fileName, cols, scale, moreLevels):
    """
    Given Image and dims (rows, cols) returns an m*n list of Images 
    """
    # declare globals
    global gscale1, gscale2
    # open image and convert to grayscale
    image = Image.open(fileName).convert('L')
    # store dimensions
    W, H = image.size[0], image.size[1]
    print("input image dims: %d x %d" % (W, H) + "<br>")
    # compute width of tile
    w = W / cols
    # compute tile height based on aspect ratio and scale
    h = w / scale
    # compute number of rows
    rows = int(H / h)

    print("cols: %d, rows: %d" % (cols, rows) + "<br>")
    print("tile dims: %d x %d" % (w, h) + "<br>")

    # check if image size is too small
    if cols > W or rows > H:
        print("Image too small for specified cols!" + "<br>")
        exit(0)

    # ascii image is a list of character strings
    aimg = []
    # generate list of dimensions
    for j in range(rows):
        y1 = int(j * h)
        y2 = int((j + 1) * h)
        # correct last tile
        if j == rows - 1:
            y2 = H
        # append an empty string
        aimg.append("")
        for i in range(cols):
            # crop image to tile
            x1 = int(i * w)
            x2 = int((i + 1) * w)
            # correct last tile
            if i == cols - 1:
                x2 = W
            # crop image to extract tile
            img = image.crop((x1, y1, x2, y2))
            # get average luminance
            avg = int(getAverageL(img))
            # look up ascii char
            if moreLevels:
                gsval = gscale1[int((avg * 69) / 255)]
            else:
                gsval = gscale2[int((avg * 9) / 255)]
            # append ascii char to string
            aimg[j] += gsval

    # return txt image
    return aimg


# main() function
def main():
    # input file
    try:
        imgFile = sys.argv[1]
    except IndexError:
        print("Error : No input")
        sys.exit()

    # set scale default as 0.43 which suits a Courier font    
    if sys.argv[2] == 'undefined':
        scale = 0.43
    else:
        scale = float(sys.argv[2])

    # set cols
    if sys.argv[3] == 'undefined':
        cols = 80
    else:
        cols = int(sys.argv[3])
    
    # Set levels
    if sys.argv[4] == '':
        moreLevels = False
    else:
        moreLevels = bool(sys.argv[4])
    
    print('generating ASCII ...<br>')
    # convert image to ascii txt
    aimg = covertImageToAscii(imgFile, cols, scale, moreLevels)

    print("<pre>")
    for row in aimg:
        print(row)


# call main
if __name__ == '__main__':
    main()
