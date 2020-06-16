import React, {useEffect, useLayoutEffect, useRef, useState} from "react"
import {Row} from "../../flexbox/Row";
import {Colors} from "../../../resources/Colors";
import styled from "styled-components";
import {Column} from "../../flexbox/Column";
import {Theme} from "../../../resources/Theme";
import {useSpring, animated, config, useTrail} from "react-spring";
import {StringUtils} from "../../../utils/StringUtils";
import {Paragraph} from "../Paragraph";
import {useComponentSize} from "../../../hooks/UseComponentSize";

interface IProps {
    value: string
    fontSize?: string
    textColor?: string
}

const NumberTickerRow = styled(Row)`
    display:relative;
    // overflow: hidden;
`

interface StyledSpanProps {
    theme?: Theme
    textColor?: string
    fontSize?: string
}

const StyledSpan = styled.span`
    font-family:Muli, sans-serif;
    font-size:${(props: StyledSpanProps) => props.fontSize ?? "30px"};
    font-weight:700;
    padding-left:1px;
    padding-bottom:10px;
    color:${(props: StyledSpanProps) => props.theme?.textColor};
`
const yTransform = (y: any) => `translateY(${y}px)`
const tickAnimationConfig = {mass: 100, tension: 500, friction: 12, clamp: true}

export const NumberTicker = (props: IProps) => {
    const [tickerHeight, setTickerHeight] = useState(0)
    const [currentValue, setCurrentValue] = useState(StringUtils.getZeroString(props.value))
    const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false)
    const letters = currentValue.split("")
    const [numberTickerRef,, numberTickerHeight] = useComponentSize()

    const tickerTrail = useTrail(letters.length, {
        tickAnimationConfig,
        y: 10,
        from: { y: 0 },
    })

    const listOfDecreasingNumber = (initialNumber: number) => {
        const numbers = []
        const until = initialNumber + 10
        for (let i = until - 1; i > initialNumber; --i) {
            numbers.push(i % 10)
        }
        numbers.push(initialNumber)
        return numbers
    }

    const [showTickers, setShowTickers] = useState(false)
    const [animationCompleted, setAnimationCompleted] = useState(false)
    // const [currentValue, setCurrentValue] = useState(props.value)
    const [currentColumnOfNumbers, setCurrentColumnOfNumbers] = useState(listOfDecreasingNumber(props.value))
    const distanceAway = props.value >= currentValue ? props.value - currentValue - 1 : 10 - (currentValue - props.value)

    const onAnimationRest = (value: any) => {
        console.log("animation rest, ", value)
        // if(value.y != -430) {
        //     setAnimationCompleted(true)
        //     setCurrentValue(props.value)
        // }
    }

    useEffect(() => {
        if(props.value != currentValue) {
            setTickerColumnProps({
                y: -(distanceAway * props.tickerHeight)
            })
            // setTickerColumnProps2({y: -(10 * props.tickerHeight) + ((distanceAway * props.tickerHeight)) + (distanceAway * 5)})
        }
    }, [props.value, animationCompleted])

    const onHeightCalculated = (value: any) => {
        if (value.y != 0) {
            setShowTickers(true)
        }
        console.log("animation rest, ", value)
    }

    useEffect(() => {
        console.log(props.tickerHeight)
        if (props.tickerHeight != 0) {
            setTimeout(() => {
                setTickerColumnProps({
                    y: -(9 * props.tickerHeight),
                    onRest: onHeightCalculated
                })
            }, 50)
        }
    }, [props.tickerHeight])

    useEffect(() => {
        if (animationCompleted) {
            setCurrentColumnOfNumbers(listOfDecreasingNumber(props.value))
        }
    }, [animationCompleted])


    const [tickerColumnProps, setTickerColumnProps] = useSpring(() => ({
        config: {mass: 100, tension: 500, friction: 12, clamp: true},
        y: 0,
        // onStart: onAnimationStart,
        onRest: onAnimationRest
    }))

    // const [tickerColumnProps2, setTickerColumnProps2] = useSpring(() => ({
    //     config: showTickers ? {mass: 1, tension: 500, friction: 12, clamp: true} : {duration: 1},
    //     y: -(10 * props.tickerHeight),
    //     // onStart: onAnimationStart,
    //     // onRest: onAnimationRest
    // }))
    //
    // const tickerStyle = () => animationCompleted ?
    //     {transform: tickerColumnProps2.y.interpolate(yTransform), visibility: "hidden"}
    //     :
    //     {transform: tickerColumnProps.y.interpolate(yTransform), visibility: "hidden"}

    useEffect(() => {
        let initialAnimationTimeout: NodeJS.Timeout | undefined = undefined
        if (!hasAnimatedOnce) {
            initialAnimationTimeout = global.setTimeout(() => {
                setCurrentValue(props.value)
                setHasAnimatedOnce(true)
            }, 1000)
        } else {
            setCurrentValue(props.value)
        }

        return () => {
            if (initialAnimationTimeout) {
                clearTimeout(initialAnimationTimeout)
            }
        }
    }, [props.value, hasAnimatedOnce])

    useEffect(() => {
        if (numberTickerHeight) {
            console.log("called here ", numberTickerHeight)
            setTickerHeight(numberTickerHeight / 10)
        }
    }, [numberTickerHeight])

    const ticker = () => {
        return (
            <animated.div style={{transform: tickerColumnProps.y.interpolate(yTransform), visibility: showTickers ? "visible" : "hidden"}}>
                <Column>
                    {
                        currentColumnOfNumbers.map((number, index) => {
                            return <StyledSpan key={index}>{number}</StyledSpan>
                        })
                    }
                </Column>
            </animated.div>
        )
    }

    return (
        <NumberTickerRow
            forwardRef={numberTickerRef}
            width={"auto"}
            height={tickerHeight != 0 ? `${tickerHeight}px` : undefined}
            backgroundColor={Colors.clearColor}>
            {
                currentValue.split("").map((letter, index) => {
                    if (StringUtils.isNumeric(letter)) {
                        return <Ticker key={index} tickerHeight={tickerHeight} value={parseInt(letter)}/>
                    }
                    return <StyledSpan key={index}>{letter}</StyledSpan>
                }
            )}
        </NumberTickerRow>
    )
}




// interface TickerColumnProps {
//     theme?: Theme
//     value: number
//     tickerHeight: number
//     textColor?: string
//     fontSize?: string
// }
//
// const yTransform = (y: any) => `translateY(${y}px)`
// const tickAnimationConfig = {mass: 1, tension: 50, friction: 12, clamp: true}
//
// const Ticker = (props: TickerColumnProps) => {
//     const listOfDecreasingNumber = (initialNumber: number) => {
//         const numbers = []
//         const until = initialNumber + 10
//         for (let i = until - 1; i > initialNumber; --i) {
//             numbers.push(i % 10)
//         }
//         numbers.push(initialNumber)
//         return numbers
//     }
//
//     const [showTickers, setShowTickers] = useState(false)
//     const [animationCompleted, setAnimationCompleted] = useState(false)
//     const [currentValue, setCurrentValue] = useState(props.value)
//     const [currentColumnOfNumbers, setCurrentColumnOfNumbers] = useState(listOfDecreasingNumber(props.value))
//     const distanceAway = props.value >= currentValue ? props.value - currentValue - 1 : 10 - (currentValue - props.value)
//
//     const onAnimationRest = (value: any) => {
//         console.log("animation rest, ", value)
//         // if(value.y != -430) {
//         //     setAnimationCompleted(true)
//         //     setCurrentValue(props.value)
//         // }
//     }
//
//     useEffect(() => {
//         if(props.value != currentValue) {
//             setTickerColumnProps({
//                 y: -(distanceAway * props.tickerHeight)
//             })
//             // setTickerColumnProps2({y: -(10 * props.tickerHeight) + ((distanceAway * props.tickerHeight)) + (distanceAway * 5)})
//         }
//     }, [props.value, animationCompleted])
//
//     const onHeightCalculated = (value: any) => {
//         if (value.y != 0) {
//             setShowTickers(true)
//         }
//         console.log("animation rest, ", value)
//     }
//
//     useEffect(() => {
//         console.log(props.tickerHeight)
//         if (props.tickerHeight != 0) {
//             setTimeout(() => {
//                 setTickerColumnProps({
//                     y: -(9 * props.tickerHeight),
//                     onRest: onHeightCalculated
//                 })
//             }, 50)
//         }
//     }, [props.tickerHeight])
//
//     useEffect(() => {
//         if (animationCompleted) {
//             setCurrentColumnOfNumbers(listOfDecreasingNumber(props.value))
//         }
//     }, [animationCompleted])
//
//
//     const [tickerColumnProps, setTickerColumnProps] = useSpring(() => ({
//         config: {mass: 100, tension: 500, friction: 12, clamp: true},
//         y: 0,
//         // onStart: onAnimationStart,
//         onRest: onAnimationRest
//     }))
//
//     // const [tickerColumnProps2, setTickerColumnProps2] = useSpring(() => ({
//     //     config: showTickers ? {mass: 1, tension: 500, friction: 12, clamp: true} : {duration: 1},
//     //     y: -(10 * props.tickerHeight),
//     //     // onStart: onAnimationStart,
//     //     // onRest: onAnimationRest
//     // }))
//     //
//     // const tickerStyle = () => animationCompleted ?
//     //     {transform: tickerColumnProps2.y.interpolate(yTransform), visibility: "hidden"}
//     //     :
//     //     {transform: tickerColumnProps.y.interpolate(yTransform), visibility: "hidden"}
//
//     const ticker = () => {
//         return (
//             <animated.div style={{transform: tickerColumnProps.y.interpolate(yTransform), visibility: showTickers ? "visible" : "hidden"}}>
//                 <Column>
//                     {
//                         currentColumnOfNumbers.map((number, index) => {
//                             return <StyledSpan key={index}>{number}</StyledSpan>
//                         })
//                     }
//                 </Column>
//             </animated.div>
//         )
//     }
//     return (
//         ticker()
//     )
// }
//
