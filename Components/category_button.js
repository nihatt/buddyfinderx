import { Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const CategoryButton = (props) => {

    return (
        <Button mode="contained" style={{marginHorizontal:wp('3%'),height:hp('6%')}} onPress={props.navigation}>
        {props.text}
    </Button>
    );
};
export default CategoryButton;