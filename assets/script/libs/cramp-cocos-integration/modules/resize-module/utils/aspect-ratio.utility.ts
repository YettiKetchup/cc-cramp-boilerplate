const aspectRatioUtility = (width: number, height: number): number => {
    return width > height ? width / height : height / width;
}

export default aspectRatioUtility;