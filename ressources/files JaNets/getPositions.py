def get_list_from_file(filename):
    file = open(filename, 'r')
    lines = []
    for line in file:
        lines.append(line.strip())
    file.close()
    return lines


def get_specific_tags(list, name, lenght=10**12):
    tags = []
    for x in list:
        if (name in x) and (len(tags) < lenght):
            tags.append(x)
    return tags


def get_values_from_list(list):
    numbers = []
    for item in list:
        for subitem in item.split():
            if "=" in subitem:
                numbers.append(subitem)
    return numbers


def main():
    list_file = get_list_from_file("./6461348.iss")

    placement_list = get_specific_tags(list_file, "placementPosition")
    tags_list = get_specific_tags(
        list_file, "componentName", len(placement_list))

    placement_list = get_values_from_list(placement_list)


if __name__ == '__main__':
    main()
